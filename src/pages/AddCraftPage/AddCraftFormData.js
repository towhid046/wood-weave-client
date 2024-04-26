const craftFormData = [
  {
    id: 1,
    title: "User_Name",
    type: 'text'
  },
  {
    id: 2,
    title: "User_Email",
    type: 'email'
  },
  {
    id: 3,
    title: "Item_Name",
    type: 'text'
  },
  {
    id: 4,
    title: "Price",
    type: 'number'
  },
  {
    id: 5,
    title: "Short_Description",
    type: 'text'
  },
  {
    id: 6,
    title: "Processing_Time",
    type: 'text'
  },
];

const craftFormData2 = [
  {
    id: 100,
    title: "Subcategory_Name",
    options: [
      "Wooden Furniture & Sculptures",
      "Wooden Home Decor",
      "Wooden Utensils and Kitchenware",
      "Jute Home Decor",
      "Jute Kitchenware & utensils",
      "Jute and wooden jewellery",
    ],
  },
  {
    id: 200,
    title: "Rating",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 300,
    title: "Customization_Example",
    options: ["yes", "no"],
  },
  {
    id: 400,
    title: "Stock_Status",
    options: ["In stock", "Made to Order"],
  },
];

export { craftFormData, craftFormData2 };
