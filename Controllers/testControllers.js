// Example test controller
export const testController = (req, res) => {
  res.status(200).json({
    success: true,
    message: "API test route working successfully 🚀",
  });
};

// Another route example
export const helloController = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello from the test controller 👋",
  });
};
