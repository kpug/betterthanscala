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
                                  articleService: ArticleService) extends AbstractController(cc){

  def get(count: Option[Int]) = Action { implicit request =>
    Ok(Json.toJson(articleService.get(count)))
  }

  def getById(id: Long) = Action { implicit request =>
    Ok(Json.toJson(articleService.getById(id)))
  }
}
