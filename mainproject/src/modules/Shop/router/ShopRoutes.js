import Shop from "@/modules/Shop/Shop.vue";
import ShopDashboard from "@/modules/Shop/views/DashboardShop.vue";
import ShopProfile from "@/modules/Shop/views/ProfileShop.vue";
// import ShopTransactions from "@/modules/Shop/views/TransactionsShop.vue";
// import ShopLog from "@/modules/Shop/views/LogShop.vue";
// import ShopSettings from "@/modules/Shop/views/SettingsShop.vue";

import AddProduct from "@/modules/Shop/views/Products/AddShopProduct.vue"
import EditProduct from "@/modules/Shop/views/Products/EditShopProduct.vue"
import DeleteProduct from "@/modules/Shop/views/Products/DeleteShopProduct.vue"
import ViewProduct from "@/modules/Shop/views/Products/ViewShopProduct.vue"
import Farmerslists from "@/modules/Shop/views/Products/Farmerslists.vue"
import Landownerslists from "@/modules/Shop/views/Products/Landownerslists.vue"
import Postedlands from "@/modules/Shop/views/Products/Postedlands.vue"
import postedagrilands from "@/modules/Shop/views/postedagrilands.vue"
import Postedfarmland from "@/modules/Shop/views/Postedfarmland.vue"
import Postedfarmlandedit from "@/modules/Shop/views/Postedfarmlandedit.vue"
import Postedagrilandedit from "@/modules/Shop/views/Postedagrilandedit.vue"
import Farmerswishes from "@/modules/Shop/views/Products/Farmerswishes.vue"



export const shopRoutes = [
  {
    path: "/shop",
    component: Shop,
    children: [
      {
        path: "",
        name: "shop-dashboard",
        components: {
          shopPage: ShopDashboard,
        },
      },
      {
        path: "profile",
        name: "shop-profile",
        components: {
          shopPage: ShopProfile,
        },
      },
     
      {
        path: "products",
        children: [
          {
            path: "add",
            name: "shop-product-add",
            components: {
              shopPage: AddProduct,
            },
          },
          {
            path: "edit",
            name: "shop-product-edit",
            components: {
              shopPage: EditProduct,
            },
          },
          {
            path: "Farmerslists",
            name: "Farmerslists",
            components: {
              shopPage: Farmerslists,
            },
          },
       
          {
            path: "postedagrilands",
            name: "postedagrilands",
            components: {
              shopPage: postedagrilands,
            },
          },
          {
            path: "Postedfarmlandedit",
            name: "Postedfarmlandedit",
            components: {
              shopPage: Postedfarmlandedit,
            },
          },
          {
            path: "Farmerswishes",
            name: "viewwishess",
            components: {
              shopPage: Farmerswishes,
            },
          },
          {
            path: "Postedagrilandedit",
            name: "Postedagrilandedit",
            components: {
              shopPage: Postedagrilandedit,
            },
          },
          {
            path: "Postedfarmland",
            name: "Postedfarmland",
            components: {
              shopPage: Postedfarmland,
            },
          },
          {
            path: "Landownerslists",
            name: "Landownerslists",
            components: {
              shopPage: Landownerslists,
            },
          },
          {
            path: "Postedlands",
            name: "Postedlands",
            components: {
              shopPage: Postedlands,
            },
          },
          {
            path: "delete",
            name: "shop-product-delete",
            components: {
              shopPage: DeleteProduct,
            },
          },
          {
            path: "view",
            name: "shop-product-view",
            components: {
              shopPage: ViewProduct,
            },
          },
        ],
      },

      // {
      //   path: "transactions",
      //   name: "shop-transactions",
      //   components: {
      //     shopPage: ShopTransactions,
      //   },
      // },
      // {
      //   path: "log",
      //   name: "shop-log",
      //   components: {
      //     shopPage: ShopLog,
      //   },
      // },
      // {
      //   path: "settings",
      //   name: "shop-settings",
      //   components: {
      //     shopPage: ShopSettings,
      //   },
      // },
    ],
  },
];
