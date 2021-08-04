<template>
  <div class="">
    <FilePond
      ref="pond"
      name="profile_image"
      class="fileponduploader"
      accepted-file-types="image/*"
      allow-image-preview="true"
      style-panel-layout="compact circle"
      instant-upload="true"
      image-preview-height="500"
      image-crop-aspect-ratio="1:1"
      image-resize-target-width="500"
      image-resize-target-height="500"
      style-load-indicator-position="center bottom"
      style-button-remove-item-position="center bottom"
      :server="server"
      :files="myFiles"
      @processfile="handleFile"
    />
  </div>
</template>

<script>
// Import Vue FilePond
import vueFilePond from 'vue-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFilePoster from 'filepond-plugin-file-poster'

// import axios from 'axios'

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFilePoster
)

export default {
  name: 'ProfileImageUploader',
  components: {
    FilePond
  },
  props: {
    profileImage: {
      type: String,
      default: () => ''
    }
  },
  data: () => ({
    removeFiles: [],
    myFiles: [],
    uploadFiles: [],
    server: {
      process (fieldName, file, metadata, load, error, progress, abort) {
        const formData = new FormData()
        formData.append(fieldName, file, file.name)
        if (file.webkitRelativePath === '') {
          const config = {
            onUploadProgress (progressEvent) {
              progress(
                progressEvent.lengthComputable,
                progressEvent.loaded,
                progressEvent.total
              )
            }
          }
          window.$nuxt.$axios
            .$post('/upload-file', formData, config)
            .then(({ data }) => {
              load(JSON.stringify(data))
            })
            .catch((thrown) => {
              error('unable to upload file')
              // handle error
            })
        } else {
          load(file)
        }
      },
      fetch (url, load) {
        window.$nuxt.$axios.$get(url).then(({ data }) => {
          const base64 = data.content
          const bstr = atob(base64)
          let n = bstr.length
          const u8arr = new Uint8Array(n)
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
          }
          const file = new File([u8arr], data.name, {
            type: data['content-type']
          })
          load(file, data.name)
        })
      }
    }
  }),
  mounted () {
    // set the myFiles from store
    if(this.profileImage != "") {
      this.myFiles = [this.profileImage]
    }
  },
  methods: {
    handleOnerror (error, file, status) {
      console.error('was in error routine', error)
    }
    ,
    handleFile (error, file) {
      if (error == null) {
        if (typeof file.source !== 'string') {
          let fileJson = JSON.parse(file.serverId)
          this.uploadFiles.push(fileJson.name)
          this.submitFiles()
        }
      }
    }
    ,
    submitFiles () {
      this.$emit(
        'file-uploaded',
         this.uploadFiles.join('|')
      )


    }
  }
}
</script>

<style lang="css" scoped>
.filepond--wrapper {
  width: 150px;
}

.filepond--drop-label {
  color: #4c4e53;
}

.filepond--label-action {
  text-decoration-color: #babdc0;
}

.filepond--panel-root {
  background-color: #edf0f4;
}

.filepond--root {
  width: 150px;
  margin: 0 auto;
}
</style>

