package models

import java.time.LocalDateTime

import play.api.libs.json.Json

/**
  *
  * @author Lawrence
  * @since 2018. 9. 20.
  * @note
  * @version 0.0.1
  */
case class Article(id: Long, title: String, content: String, date: LocalDateTime, author: String, category: List[String])

object Article {
  implicit val format = Json.format[Article]
}