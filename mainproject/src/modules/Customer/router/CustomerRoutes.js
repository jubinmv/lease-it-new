import Customer from "@/modules/Customer/Customer.vue"
import CustomerDashboard from "@/modules/Customer/views/DashboardCustomer.vue"
import CustomerProfile from "@/modules/Customer/views/ProfileCustomer.vue";
// import CustomerTransactions from "@/modules/Customer/views/TransactionsCustomer.vue";
// import CustomerLog from "@/modules/Customer/views/LogCustomer.vue";
import Land from "@/modules/Customer/views/Land.vue";
// import CustomerSettings from "@/modules/Customer/views/SettingsCustomer.vue";
import Farmerslist from "@/modules/Customer/views/Farmerslist.vue";
import Landownerslist from "@/modules/Customer/views/Landownerslist.vue";
// import Leasedlands from "@/modules/Customer/views/Leasedlands.vue";
import Farmland from "@/modules/Customer/views/Farmland.vue";
import Agreement from "@/modules/Customer/views/Agreement.vue";
import Agriland from "@/modules/Customer/views/Agriland.vue";
import viewcrops from "@/modules/Customer/views/viewcrops.vue";
import wishlist from "@/modules/Customer/views/wishlist.vue";
import mywishes from "@/modules/Customer/views/mywishes.vue";
import review from "@/modules/Customer/views/review.vue";


export const customerRoutes = [
  {
    path: "/customer",
    component: Customer,
    children: [
      {
        path: "",
        name: "customer-dashboard",
        components: {
          customerPage: CustomerDashboard,
        },
      },
      
      {
        path: "profile",
        name: "customer-profile",
        components: {
          customerPage: CustomerProfile,
        },
      },
      // {
      //   path: "transactions",
      //   name: "customer-transactions",
      //   components: {
      //     customerPage: CustomerTransactions,
      //   },
      // },
      // {
      //   path: "log",
      //   name: "customer-log",
      //   components: {
      //     customerPage: CustomerLog,
      //   },
      // },
      {
        path: "Land",
        name: "Land",
        components: {
          customerPage: Land,
        },
      },
      {
        path: "wishlist",
        name: "wishlist",
        components: {
          customerPage: wishlist,
        },
      },
     

      {
        path: "viewcrops",
        name: "viewcrops",
        components: {
          customerPage: viewcrops,
        },
      },
      {
        path: "mywishes",
        name: "mywishes",
        components: {
          customerPage: mywishes,
        },
      },

      {
        path: "Agriland",
        name: "Agriland",
        components: {
          customerPage: Agriland,
        },
      },
     
      {
        path: "review",
        name: "review",
        components: {
          customerPage: review,
        },
      },
      {
        path: "Farmland",
        name: "Farmland",
        components: {
          customerPage: Farmland,
        },
      },
      {
        path: "Agreement",
        name: "Agreement",
        components: {
          customerPage: Agreement,
        },
      },
      {
        path: "Farmerslist",
        name: "Farmerslist",
        components: {
          customerPage: Farmerslist,
        },
      },
      {
        path: "Landownerslist",
        name: "Landownerslist",
        components: {
          customerPage: Landownerslist,
        },
      },
      // {
      //   path: "Leasedlands",
      //   name: "Leasedlands",
      //   components: {
      //     customerPage: Leasedlands,
      //   },
      // },
      // {
      //   path: "settings",
      //   name: "customer-settings",
      //   components: {
      //     customerPage: CustomerSettings,
      //   },
      // },
    ],
  },
];
