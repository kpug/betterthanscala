package controllers

import java.nio.file.Paths

import javax.inject.Inject
import play.api.mvc._

/**
  *
  * @author Lawrence
  * @since 2018. 9. 23.
  * @note
  * @version
  */
@Singleton
class ImageController @Inject()(cc: ControllerComponents) extends AbstractController(cc){

  def upload = Action(parse.multipartFormData) { request =>
    request.body.file("picture").map { picture =>

      // only get the last part of the filename
      // otherwise someone can send a path like ../../home/foo/bar.txt to write to other files on the system
      val filename = Paths.get(picture.filename).getFileName

      picture.ref.moveTo(Paths.get(s"/tmp/picture/$filename"), replace = true)
      Ok("File uploaded")
    }.getOrElse {
      BadRequest
//      Redirect(routes.index).flashing(
//        "error" -> "Missing file")
    }
  }
}
