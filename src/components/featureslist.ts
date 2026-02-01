type Difficulty = "Easy" | "Intermediate" | "Advanced";
export interface Feature {
  index: number;
  name: string;
  difficultyLevel: Difficulty;
}

const features: Feature[] = [
  {
    index: 1,
    name: "Counter with Undo/Redo",
    difficultyLevel: "Easy",
  },
  {
    index: 2,
    name: "Click Outside to Close Dropdown",
    difficultyLevel: "Intermediate",
  },
  {
    index: 3,
    name: "Inline Editable Text Field",
    difficultyLevel: "Advanced",
  },
  {
    index: 4,
    name: "Temperature Converter (Celsius/Fahrenheit)",
    difficultyLevel: "Easy",
  },
  {
    index: 5,
    name: "OTP Input",
    difficultyLevel: "Intermediate",
  },
  {
    index: 6,
    name: "Form Validation",
    difficultyLevel: "Advanced",
  },
  {
    index: 7,
    name: "Animated Flip Card Using Pure CSS",
    difficultyLevel: "Easy",
  },
  {
    index: 8,
    name: "Custom Tab Component With Keyboard Support",
    difficultyLevel: "Advanced",
  },
  {
    index: 9,
    name: "Flat Version of Deeply Nested Array Without Array.flat",
    difficultyLevel: "Easy",
  },
  {
    index: 10,
    name: "Flatten Object Inspector",
    difficultyLevel: "Easy",
  },
  {
    index: 11,
    name: "Custom Modal With Keyboard Interactions",
    difficultyLevel: "Intermediate",
  },
  {
    index: 12,
    name: "Deep Clone",
    difficultyLevel: "Advanced",
  },
  {
    index: 13,
    name: "E-Commerse Product List With API & Context",
    difficultyLevel: "Easy",
  },
  {
    index: 14,
    name: "Kanban Board",
    difficultyLevel: "Intermediate",
  },
  {
    index: 15,
    name: "String Compression Preview",
    difficultyLevel: "Advanced",
  },
  {
    index: 16,
    name: "Debounce Search With API Integration",
    difficultyLevel: "Easy",
  },
  {
    index: 17,
    name: "Multi-Step Form",
    difficultyLevel: "Advanced",
  },
  {
    index: 18,
    name: "Promise.allSettled Polyfill With Multiple APIs",
    difficultyLevel: "Advanced",
  },
  {
    index: 19,
    name: "Todo List with Filters",
    difficultyLevel: "Easy",
  },
  {
    index: 20,
    name: "Sequential Progress Bar",
    difficultyLevel: "Easy",
  },
  {
    index: 21,
    name: "Sticky Sidebar Component",
    difficultyLevel: "Intermediate",
  },
  {
    index: 22,
    name: "Password Strength Meter",
    difficultyLevel: "Advanced",
  },
  {
    index: 23,
    name: "GroupBy Utility",
    difficultyLevel: "Easy",
  },
  {
    index: 24,
    name: "Resizable Panel (Split Layout)",
    difficultyLevel: "Intermediate",
  },
  {
    index: 25,
    name: "Horizontal Scroll Menu",
    difficultyLevel: "Advanced",
  },
  {
    index: 26,
    name: "Search in a Nested Structure",
    difficultyLevel: "Easy",
  },
  {
    index: 27,
    name: "JSON Diff Viewer",
    difficultyLevel: "Advanced",
  },
  {
    index: 28,
    name: "Dynamic Form",
    difficultyLevel: "Advanced",
  },
  {
    index: 29,
    name: "File Explorer",
    difficultyLevel: "Easy",
  },
];

export default features;
