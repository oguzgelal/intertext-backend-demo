const get = require("lodash/get");
const express = require("express");
const api = require("../api/recipes");

const route = (path) => `/recipes${path}`;
const view = (path) => `recipes/${path}`;

const router = express.Router();

const protectedRouteCheck = (req, res, path) => {
  const token = get(req, "body.persist.token");

  if (!token) {
    res.render(view("redirect"), {
      immediate: false,
      message: "Please sign in to continue",
      endpoint: route("/signin"),
      state: [
        {
          key: "auth_callback",
          value: path,
        },
      ],
    });
  }
};

/**
 * Main screen
 */
router.post("/", async (req, res, next) => {
  protectedRouteCheck(req, res, route("/"));

  const recipes = await api.recipes();
  const layout = get(req, "body.persist.layout") || "list";
  const query = get(req, "body.inputState.query") || "";

  const recipesFiltered = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase()) ||
      recipe.description.some((i) =>
        i.toLowerCase().includes(query.toLowerCase())
      )
  );

  res.render(view("home"), {
    recipes: recipesFiltered,
    layout_list: layout === "list",
    layout_grid: layout === "grid",
    query,
  });
});

/**
 * New recipe screen
 */
router.post("/new", async (req, res, next) => {
  protectedRouteCheck(req, res, route("/new"));
  res.render(view("new"));
});

/**
 * Sign in screen
 */
router.post("/signin", async (req, res, next) => {
  const email = get(req, "body.inputState.signin__email");
  const password = get(req, "body.inputState.signin__password");
  const callback = get(req, "body.state.auth_callback");

  if (!email && !password) {
    res.render(view("signin"));
  } else {
    try {
      const user = await api.signin(email, password);
      res.render(view("redirect"), {
        message: "Sign in successful",
        endpoint: callback || route("/"),
        state: [
          {
            key: "token",
            value: user.token,
            persist: true,
          },
        ],
      });
    } catch (e) {
      res.render(view("signin"), {
        error: e.message || "Cannot sign in",
      });
    }
  }
});

/**
 * Sign out screen
 */
router.post("/signout", async (req, res, next) => {
  res.render(view("redirect"), {
    immediate: false,
    message: "Signing out...",
    endpoint: route("/signin"),
    state: [{ key: "token", persist: true, clear: true }],
  });
});

/**
 * Sign up screen
 */
router.post("/signup", async (req, res, next) => {
  res.render(view("signup"));
});

/**
 * Forgot screen
 */
router.post("/forgot", async (req, res, next) => {
  res.render(view("forgot"));
});

module.exports = router;
