const express = require("express");

const router = express.Router();

const categoryController = require("../controller/lutw/categoryController");//

const googleFavController = require("../controller/lutw/googleFavController");//

const highlightsDetailsController = require("../controller/lutw/highlightDetailsController");

const pageDetailsController = require("../controller/lutw/pageDetailsController");
const categoryWiseArticleController = require("../controller/lutw/getCategorywiseArticle");

const userController = require("../controller/lutw/userController");
const userfavouriteTopicController = require("../controller/lutw/userFavouriteTopicController");

const googleFavVideoController = require("../controller/lutw/googleFavVideoController");
const imageThreeController = require("../controller/lutw/imageThreeController");
const googleFavImageController = require("../controller/lutw/googleFavImageController");
const categoryDetailController = require("../controller/lutw/categoryDetailsController");//
const projectArticleController = require("../controller/lutw/projectArticle");
const projectArticleViewController = require("../controller/lutw/projectArticleView");
const userNameController = require("../controller/lutw/userNameController");
const userTopicController = require("../controller/lutw/userTopicController");
const categoryNameController = require("../controller/lutw/categoryNameController");//
const singleCategoryNameController = require("../controller/lutw/singleCategoryName");
const projectNameController = require("../controller/lutw/projectNameController");
const recycleArticleController = require("../controller/lutw/recycleArticleController");
const idProjectNameController = require("../controller/lutw/idProjectNameController");
const googleFavProjectsController = require("../controller/lutw/googleFavProjects");
const singleProjectNameController = require("../controller/lutw/singleProjectName");
const projectDetailsController = require("../controller/lutw/projectDetails");
const googleInterestMembersController = require("../controller/lutw/googleInterestMemberController");
const checkSubtopicController = require("../controller/lutw/checkSubtopicController");
const memberUserNameController = require("../controller/lutw/memberUserNameController");
const subtopicAllController = require("../controller/lutw/subtopicAllController");

router.post("/project-article", projectArticleController);
router.post("/project-article-view", projectArticleViewController);
router.post("/user-topic", userTopicController);

router.post("/user-name", userNameController);
router.post("/member-user-name", memberUserNameController);
router.post("/category-name", categoryNameController);
router.post("/single-category-name", singleCategoryNameController);

router.get("/category", categoryController);
router.post("/category-details", categoryDetailController);
router.get("/google-interest-projects", categoryDetailController);

router.post("/google-fav", googleFavController);
router.post("/google-fav-projects", googleFavProjectsController);
router.get('/category-wise-article',categoryWiseArticleController)
router.get("/google-fav-video", googleFavVideoController);
router.get("/google-fav-image", googleFavImageController);

router.post("/highlights-details", highlightsDetailsController);
router.get("/image-three-highlights", imageThreeController);

router.post("/page-details", pageDetailsController);
router.post("/project-name", projectNameController);
router.post("/google-interest-member", googleInterestMembersController);
router.post("/project-details", projectDetailsController);
router.post("/single-project-name", singleProjectNameController);
router.post("/id-project-name", idProjectNameController);
router.post("/recycle-article", recycleArticleController);
router.post("/check-subtopic", checkSubtopicController)

router.post("/user", userController);
router.post("/user-favourite-topic", userfavouriteTopicController);
router.post('/subtopic-all', subtopicAllController)

module.exports = router;
