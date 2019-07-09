package controllers

import javax.inject._
import play.api.libs.json.{JsError, JsPath, JsResult, JsSuccess, JsValue, Json}
import play.api.mvc._
import services.ArticleService
import kr.pe.lawrence._
import models.Article

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

    val articles = articleService.select(count, pages)
      .map(a => a.copy(content = Markdown.remove(a.content)))

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

  def save = Action { request: Request[AnyContent] =>
    val body: Option[JsValue] = request.body.asJson

    Json.fromJson[Article](body.get) match {
      case JsSuccess(a: Article, path: JsPath) =>
        articleService.save(a);
      case e @ JsError(_) =>
        println("Errors: " + JsError.toJson(e).toString())
    }

    // Expecting json body
    body
      .map { json =>
        Ok("Got: " + (json \ "author").as[String])
      }
      .getOrElse {
        BadRequest("Expecting application/json request body")
      }
  }

  def modify = Action { request: Request[AnyContent] =>
    val body: Option[JsValue] = request.body.asJson

    Json.fromJson[Article](body.get) match {
      case JsSuccess(a: Article, path: JsPath) =>
        articleService.modify(a);
      case e @ JsError(_) =>
        println("Errors: " + JsError.toJson(e).toString())
    }

    // Expecting json body
    body
      .map { json =>
        Ok("Got: " + (json \ "name").as[String])
      }
      .getOrElse {
        BadRequest("Expecting application/json request body")
      }
  }

}
