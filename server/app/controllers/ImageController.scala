package controllers

import java.nio.file.Paths
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

import javax.inject._
import play.api.libs.json.Json
import play.api.mvc._
import utils.HashUtils

/**
  *
  * @author Lawrence
  * @since 2018. 9. 23.
  * @note
  * @version 0.0.1
  */
@Singleton
class ImageController @Inject()(cc: ControllerComponents) extends AbstractController(cc){

  def upload = Action(parse.multipartFormData) { request =>
    request.body.file("picture").map { picture =>

      // only select the last part of the filename
      // otherwise someone can send a path like ../../home/foo/bar.txt to write to other files on the system
      val originName = Paths.get(picture.filename).getFileName
      val hash = HashUtils.md5HashString(originName + LocalDateTime.now.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))

      picture.ref.moveTo(Paths.get(s"/Users/Lawrence/temp/${hash}"), replace = true)
      Ok(Json.toJson(Map( "path" -> hash)))
    }.getOrElse {
      BadRequest
//      Redirect(routes.index).flashing(
//        "error" -> "Missing file")
    }
  }
}
