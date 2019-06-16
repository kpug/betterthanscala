package repositories

import java.time.{LocalDateTime, ZoneId}
import java.util.Date

import anorm._
import anorm.SqlParser._
import javax.inject.Inject
import models.Article
import play.api.db.Database

/**
  *
  * @author Lawrence
  * @since 2019.06.16
  * @note
  * @version
  */
class ArticleRepository @Inject()(db: Database) {

  val parser = int("id") ~
    str("title") ~
    str("content") ~
    date("date") ~
    str("author") ~
    str("tags") map {
    case i ~ t1 ~ c ~ d ~ a ~ t2 => {
      val ld = LocalDateTime.ofInstant(new Date().toInstant(), ZoneId.systemDefault())
      val tags = t1.split(",").toList
      Article(i, t1, c, ld, a, tags)
    }
  }

  def get(): List[Article] =
    db.withConnection { implicit c =>
      SQL("SELECT id, title, content, date, author, tags FROM tb_article").as(parser.*)
    }
}
