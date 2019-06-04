package controllers

import javax.inject._

import play.api.libs.json.Json
import play.api.mvc._
import services.ArticleService

/**
  *
  * @author Lawrence
  * @since 2018. 9. 19.
  * @note
  * @version
  */
@Singleton
class ArticleController @Inject()(cc: ControllerComponents,
                                  articleService: ArticleService) extends AbstractController(cc) {

  def get(count: Option[Int], pages: Option[Int]) = Action { implicit request =>

    val articles = articleService.get(count, pages)
    val total = articleService.count

    articles.size match {
      case 0 =>
        NoContent
      case _ =>
        Ok(Json.toJson(articles))
          .withHeaders("X-total-count" -> total.toString,
            "Access-control-expose-headers" -> "*")
    }
  }

  def getByTag(tag: String, count: Option[Int], pages: Option[Int]) = Action { implicit request =>
    val articles = articleService.getByTag(tag, count, pages)
    val total = articleService.countByTag(tag)

    articles.size match {
      case 0 =>
        NoContent
      case _ =>
        Ok(Json.toJson(articles))
          .withHeaders("X-total-count" -> total.toString,
            "Access-control-expose-headers" -> "*")
    }
  }

  def getById(id: Long) = Action { implicit request =>
    Ok(Json.toJson(articleService.getById(id)))
  }
}
