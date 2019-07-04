package repositories

import java.time.{LocalDateTime, ZoneId}

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
    date("created_at") ~
    date("updated_at") ~
    str("author") ~
    str("tags") map {
    case i ~ t1 ~ c ~ ca ~ ua ~ a ~ t2 => {
      val cca = Option(LocalDateTime.ofInstant(ca.toInstant(), ZoneId.systemDefault()))
      val uca = Option(LocalDateTime.ofInstant(ua.toInstant(), ZoneId.systemDefault()))
      val tags = t2.split(",").toList
      Article(Option(i), t1, c, cca, uca, a, tags)
    }
  }

  def get(): List[Article] =
    db.withConnection { implicit c =>
      SQL("SELECT id, title, content, created_at, updated_at, author, tags FROM tb_article").as(parser.*)
    }

  def insert(article: Article): Article = {
    val id: Option[Long] = db.withTransaction { implicit c =>
      val _title = article.title
      val _content = article.content
      val _author = article.author
      val _tags = article.tags.mkString(",")

      SQL"insert into tb_article(title, content, created_at, updated_at, author, tags) values (${_title}, ${_content}, curdate(), ${_author}, ${_tags})"
        .executeInsert()
    }
    article.copy(id = id)
  }

  def update(article: Article): Article = {
    db.withConnection { implicit c =>
      val _id = article.id
      val _title = article.title
      val _content = article.content
      val _author = article.author
      val _tags = article.tags
      SQL"update tb_article set title=${_title}, content = ${_content}, author=${_author}, tags=${_tags}, date=curdate() where id = ${_id}"
    }

    article
  }
}
