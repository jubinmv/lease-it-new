<template>
  <div class="tile is-ancestor">
    <CustomerDashboardCard data="Agri Lands" />
    <CustomerDashboardCard data="Estate Lands" />
    <CustomerDashboardCard data="Sustainable farms" />
  </div>

  <div class="tile is-ancestor">
    <CustomerDashboardCard data="Whishlist" />
    <CustomerDashboardCard data="Trends" />
    <CustomerDashboardCard data="Small Farms" />
  </div>
</template>

<script>
import CustomerDashboardCard from "@/modules/Customer/components/CustomerDashboardCard.vue";

export default {
  components: {
    CustomerDashboardCard,
  },
};
</script>
