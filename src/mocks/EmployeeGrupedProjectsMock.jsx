function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}
const cellMaxValue = 40;

const EmployeeGrupedProjectsMock = [
  {
    name: "Toyota Motor Corp Australia Lmtd",
    code: 1,
    projects: [
      {
        id: 1,
        name: "[BAU] BAU Team",
        jobCode: 73983,
        client: "R/GA",
        allocations: [
          { id: 1, value: 1 },
          {
            id: 2,
            value: 2,
          },
          {
            id: 3,
            value: 3,
          },
          {
            id: 4,
            value: 4,
          },
          { id: 5, value: 5 },
          {
            id: 6,
            value: 6,
          },
          {
            id: 7,
            value: 7,
          },
          {
            id: 8,
            value: 8,
          },
          {
            id: 9,
            value: 9,
          },
          {
            id: 10,
            value: 10,
          },
        ],
      },
      {
        id: 11113,
        name: "[BAU] Corolla Sedan Tech Change",
        jobCode: 74315,
        client: "N/A",
        allocations: [
          { id: 1, value: 5 },
          {
            id: 2,
            value: randomInt(1, cellMaxValue),
          },
          {
            id: 3,
            value: randomInt(1, 25),
          },
          {
            id: 4,
            value: randomInt(1, 25),
          },
          { id: 5, value: null },
          {
            id: 6,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 7,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 8,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 9,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 10,
            value: randomInt(25, 50),
          },
        ],
      },
      {
        id: 77788899,
        name: "[BAU] Current Offers",
        jobCode: 74226,
        client: "N/A",
        allocations: [
          { id: 1, value: null },
          {
            id: 2,
            value: randomInt(1, cellMaxValue),
          },
          {
            id: 3,
            value: randomInt(1, 25),
          },
          {
            id: 4,
            value: randomInt(1, 25),
          },
          { id: 5, value: null },
          {
            id: 6,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 7,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 8,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 9,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 10,
            value: randomInt(25, 50),
          },
        ],
      },
    ],
  },
  {
    name: "Samsung US (Retail)",
    code: 2,
    projects: [
      {
        id: 543211,
        name: "Samsung_Retail_2020_Content_Updates",
        jobCode: 72805,
        client: "N/A",
        allocations: [
          { id: 1, value: null },
          {
            id: 2,
            value: randomInt(1, cellMaxValue),
          },
          {
            id: 3,
            value: randomInt(1, 25),
          },
          {
            id: 4,
            value: randomInt(1, 25),
          },
          { id: 5, value: null },
          {
            id: 6,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 7,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 8,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 9,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 10,
            value: randomInt(25, 50),
          },
        ],
      },
      {
        id: 1234567,
        name: "SRT - Walmart Refresh 2019",
        jobCode: 68063,
        client: "N/A",
        allocations: [
          { id: 1, value: null },
          {
            id: 2,
            value: randomInt(1, cellMaxValue),
          },
          {
            id: 3,
            value: randomInt(1, 25),
          },
          {
            id: 4,
            value: randomInt(1, 25),
          },
          { id: 5, value: null },
          {
            id: 6,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 7,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 8,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 9,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 10,
            value: randomInt(25, 50),
          },
        ],
      },
    ],
  },
  {
    name: "Verizon (Consumer)",
    code: 2,
    projects: [
      {
        id: 52156,
        name: "#PayItForward Live",
        jobCode: 73966,
        client: "N/A",
        allocations: [
          { id: 1, value: null },
          {
            id: 2,
            value: randomInt(1, cellMaxValue),
          },
          {
            id: 3,
            value: randomInt(1, 25),
          },
          {
            id: 4,
            value: randomInt(1, 25),
          },
          { id: 5, value: null },
          {
            id: 6,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 7,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 8,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 9,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 10,
            value: randomInt(25, 50),
          },
        ],
      },
      {
        id: 672,
        name: "5G Nationwide 2020",
        jobCode: 73377,
        client: "N/A",
        allocations: [
          { id: 1, value: null },
          {
            id: 2,
            value: randomInt(1, cellMaxValue),
          },
          {
            id: 3,
            value: randomInt(1, 25),
          },
          {
            id: 4,
            value: randomInt(1, 25),
          },
          { id: 5, value: null },
          {
            id: 6,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 7,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 8,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 9,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 10,
            value: randomInt(25, 50),
          },
        ],
      },
      {
        id: 6532,
        name: "Iconic 2020",
        jobCode: 73373,
        client: "N/A",
        allocations: [
          { id: 1, value: null },
          {
            id: 2,
            value: randomInt(1, cellMaxValue),
          },
          {
            id: 3,
            value: randomInt(1, 25),
          },
          {
            id: 4,
            value: randomInt(1, 25),
          },
          { id: 5, value: null },
          {
            id: 6,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 7,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 8,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 9,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 10,
            value: randomInt(25, 50),
          },
        ],
      },
      {
        id: 42342,
        name: "NFL Draft",
        jobCode: 74268,
        client: "N/A",
        allocations: [
          { id: 1, value: null },
          {
            id: 2,
            value: randomInt(1, cellMaxValue),
          },
          {
            id: 3,
            value: randomInt(1, 25),
          },
          {
            id: 4,
            value: randomInt(1, 25),
          },
          { id: 5, value: null },
          {
            id: 6,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 7,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 8,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 9,
            value: randomInt(25, cellMaxValue),
          },
          {
            id: 10,
            value: randomInt(25, 50),
          },
        ],
      },
    ],
  },
];

export default EmployeeGrupedProjectsMock;
