package services

import java.time.LocalDateTime
import javax.inject._

import models.Article

/**
  *
  * @author Lawrence
  * @since 2018. 9. 20.
  * @note
  * @version 0.0.1
  */
@Singleton
class ArticleService @Inject()() {

  val articles = List(
    Article(id = 1,
      title = "스칼라 언어에서 트레이트 사용하기",
      content = "트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다.",
      date = LocalDateTime.now,
      author = "Lawrence Kim",
      category = List("Scala", "basic", "trait", "ddd")
    ),
    Article(id = 2,
      title = "이 번주 스칼라 소식",
      content = "1. 스파크 속 아카 이야기, 2. 스칼라 데이즈 현장 취재",
      date = LocalDateTime.now,
      author = "Lawrence Kim",
      category = List("Scala", "Spark", "Akka", "ScalaDays2018")
    ),
    Article(id = 3,
      title = "이 번주 스칼라 소식",
      content = "1. 스파크 속 아카 이야기, 2. 스칼라 데이즈 현장 취재",
      date = LocalDateTime.now,
      author = "Lawrence Kim",
      category = List("Scala", "Spark", "Akka", "ScalaDays2018")
    ),
    Article(id = 4,
      title = "이 번주 스칼라 소식",
      content = "1. 스파크 속 아카 이야기, 2. 스칼라 데이즈 현장 취재",
      date = LocalDateTime.now,
      author = "Lawrence Kim",
      category = List("Scala", "Spark", "Akka", "ScalaDays2018")
    ),
    Article(id = 5,
      title = "이 번주 스칼라 소식",
      content = "1. 스파크 속 아카 이야기, 2. 스칼라 데이즈 현장 취재",
      date = LocalDateTime.now,
      author = "Lawrence Kim",
      category = List("Scala", "Spark", "Akka", "ScalaDays2018")
    ),
    Article(id = 6,
      title = "이 번주 스칼라 소식",
      content = "1. 스파크 속 아카 이야기, 2. 스칼라 데이즈 현장 취재",
      date = LocalDateTime.now,
      author = "Lawrence Kim",
      category = List("Scala", "Spark", "Akka", "ScalaDays2018")
    )
  )

  def count(): Long = articles.size

  def get(count: Option[Int]): List[Article] = {
    articles.take(count.getOrElse(Integer.MAX_VALUE))
  }

  def getById(id: Long): Article = articles.filter(_.id == id).head

}
