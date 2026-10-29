const user = [
  {
    id: 1,
    name: "Aftab Farhan Arko",
    email: "aftab@example.com",
    age: 22,
    role: "Backend Developer",
  },
  {
    id: 2,
    name: "Rahim Ahmed",
    email: "rahim@example.com",
    age: 24,
    role: "User",
  },
  {
    id: 3,
    name: "Karim Hasan",
    email: "karim@example.com",
    age: 25,
    role: "Admin",
  },
];

const allUserGet = (req, res) => {
  res.json(user);
};

const singleUser = (req, res) => {
  const id = Number(req.params.id);

  const users = user.find((u) => u.id === id);

  if (!users) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    data: users,
  });
};

module.exports = { allUserGet, singleUser };
