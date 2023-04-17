<template>
  <div class="tile is-ancestor">
    <AdminDashboardCard data="Users" />
    <AdminDashboardCard data="Farmers" />
    <AdminDashboardCard data="Landowners" />
  </div>

  <div class="tile is-ancestor">
    <AdminDashboardCard data="Land Category" />
    <AdminDashboardCard data="Crop Category" />
    <AdminDashboardCard data="Lands" />
  </div>
  <div class="tile is-ancestor">
    <AdminDashboardCard data="Crops" />
    <AdminDashboardCard data="Leased Lands" />
    <AdminDashboardCard data="Notifications" />
  </div>
</template>

<script>
import AdminDashboardCard from "@/modules/Admin/components/AdminDashboardCard.vue";

export default {
  components: {
    AdminDashboardCard,
  },
};
</script>
