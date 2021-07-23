<template>
    <div class="col-lg-3 col-md-4">
      <div :class="getCardClasses(law.color_class)">
          <div class="number">{{ law.law_code }}</div>
          <h4>{{ law.law_title }}</h4>
          <div class="tag">{{ law.type_name }}</div>
          <hr>
          <div class="row">
            <div class="col-6">Fine: ${{ law.fine_amount }}</div>
            <div class="col-6 text-end">Months: {{ law.duration }}</div>
          </div>
      </div>
    </div>
  
</template>

<script>
export default {
  props: ['law'],
  name: 'fineCardItem',
  methods: {
    getCardClasses (colorClass) {
      return 'fine-card ' + colorClass
    }
  },  
}
</script>





