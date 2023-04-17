<template>
  <div class="tile is-ancestor">
    <ShopDashboardCard data="My Listings" />
    <ShopDashboardCard data="Sellers Plan" />

    <ShopDashboardCard data="Sellers Guide" />
  </div>

</template>

<script>
import ShopDashboardCard from "@/modules/Shop/components/ShopDashboardCard.vue";

export default {
  components: {
    ShopDashboardCard,
  },
};
</script>
