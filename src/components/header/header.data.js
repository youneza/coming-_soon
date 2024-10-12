export default [
  // {
  //   path: "/",
  //   label: "HOME",
  // },
  // {
  //   path: "/cart",
  //   label: "CART",
  // },
  // {
  //   path: "/wishlist",
  //   label: "WISHLIST",
  // },

  {
    label: "SHOP",
    path: "/shop",
    key: "1",

    isDropdown: true,
    dropdownItems: [
      {
        path: "/shop",
        label: "WIGS",
        isDropdown: true,
        key: "1-1",
        dropdownItems: [
          {
            path: "/shop/hd",
            label: "HD",
            isDropdown: true,
            key: "1-1-1",

            dropdownItems: [
              {
                path: "/shop/hd/raw",
                label: "RAW",
                key: "1-1-1-2",
              },
              {
                path: "/shop/hd/virgin",
                label: "VIRGIN",
                key: "1-1-1-3",
              },
              {
                path: "/shop/hd/613",
                label: "613",
                key: "1-1-1-4",
              },
            ],
          },
          {
            path: "/shop/transparent",
            label: "TRANSPARENT",
            isDropdown: true,
            key: "1-1-2",

            dropdownItems: [
              {
                path: "/shop/transparent/raw",
                label: "RAW",
                key: "1-1-2-1",
              },
              {
                path: "/shop/transparent/virgin",
                label: "VIRGIN",
                key: "1-1-2-2",
              },
              {
                path: "/shop/transparent/613",
                label: "613",
                key: "1-1-2-3",
              },
            ],
          },
          {
            path: "/shop/custom",
            label: "CUSTOM",
            isDropdown: true,
            key: "1-1-3",

            dropdownItems: [
              {
                path: "/shop/custom/hd",
                label: "HD",
                key: "1-1-3-1",
              },
              {
                path: "/shop/custom/transparent",
                label: "TRANSPARENT",
                key: "1-1-3-2",
              },

              {
                path: "/shop/custom/watercolor",
                label: "WATERCOLOR",
                key: "1-1-3-3",
              },
            ],
          },
        ],
      },

      {
        path: "/shop/closures",
        label: "CLOSURES",
        isDropdown: true,
        key: "1-3",
        dropdownItems: [
          {
            path: "/shop/closures/hd",
            label: "HD",
            key: "1-3-1",
          },
          {
            path: "/shop/closures/transparent",
            label: "TRANSPARENT",
            key: "1-3-2",
          },
        ],
      },
      {
        path: "/shop/frontals",
        label: "FRONTALS",
        isDropdown: true,
        key: "1-4",
        dropdownItems: [
          {
            path: "/shop/frontals/hd",
            label: "HD",
            key: "1-4-1",
          },
          {
            path: "/shop/frontals/transparent",
            label: "TRANSPARENT",
            key: "1-4-2",
          },
        ],
      },
      {
        path: "/shop/bundles",
        label: "BUNDLES",
        key: "1-2",
      },
    ],
  },

  {
    path: "/tools",
    label: "TOOLS",
    key: "2",
    isDropdown: true,
    dropdownItems: [
      {
        path: "/tools/slay-kit",
        label: "SLAY KIT",
        key: "2-1",
      },
      {
        path: "/tools/lace-products",
        label: "LACE PRODUCTS",
        key: "2-2",
      },
      {
        path: "/tools/hair-products",
        label: "HAIR PRODUCTS",
        key: "2-3",
      },
    ],
  },
  // {
  //   path: "/build-a-wig",
  //   label: "BUILD-A-WIG",
  //   key: "5",
  // },

  {
    label: "BRAND",
    isDropdown: true,
    dropdownItems: [
      {
        path: "/about",
        label: "ABOUT US",
        key: "6",
      },

      {
        path: "/contact",
        label: "CONTACT",
        key: "8",
      },
      {
        path: "/booking",
        label: "BOOKING",
        key: "4",
      },
      {
        path: "/care&storage",
        label: "CARE & STORAGE",
        key: "4",
      },
      {
        path: "/faq",
        label: "FAQ",
        key: "7",
      },
      {
        path: "/payment",
        label: "PAYMENT",
        key: "7",
      },
    ],
  },
];
