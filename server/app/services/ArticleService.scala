package services

import java.time.LocalDateTime

import javax.inject._
import models.Article
import repositories.ArticleRepository

/**
  *
  * @author Lawrence
  * @since 2018. 9. 20.
  * @note
  * @version 0.0.1
  */
@Singleton
class ArticleService @Inject()(articleRepository: ArticleRepository) {

  val articles = List(
    Article(id = Option(1L),
      title = "스칼라 언어에서 트레이트 사용하기",
      content = "## aaa\n" +
        "### aaa2\n\n" +
        "- 1\n" +
        "- 2\n" +
        "- 3\n" +
        "- 4\n" +
        "\n" +
        "트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다.\n" +
        "\n" +
        "```scala\n" +
        "val a = 3\n" +
        "val b = 4\n" +
        "val sum = a + b\n" +
        "```\n" +
        "\n" +
        "blablabla +" +
        "## aaa3\n" +
    "### aaa4\n\n" +
    "- 1\n" +
    "- 2\n" +
    "- 3\n" +
    "- 4\n" +
    "\n" +
    "트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다.\n" +
    "\n" +
    "```scala\n" +
    "val a = 3\n" +
    "val b = 4\n" +
    "val sum = a + b\n" +
    "```\n" +
    "\n" +
    "blablabla" +
        "## aaa5\n" +
  "### aaa6\n\n" +
    "- 1\n" +
    "- 2\n" +
    "- 3\n" +
    "- 4\n" +
    "\n" +
    "트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다. 트레이트는 자바에서 인터페이스와 같은 역할을 하는 스칼라의 키워드로 Trait로 선언한다.\n" +
    "\n" +
    "```scala\n" +
    "val a = 3\n" +
    "val b = 4\n" +
    "val sum = a + b\n" +
    "```\n" +
    "\n" +
    "blablabla\n" +
        "## aaa7",
      createdAt = Option(LocalDateTime.now),
      updatedAt = Option(LocalDateTime.now),
      author = "Lawrence Kim",
      tags = List("Scala", "basic", "trait", "ddd")
    ),
    Article(id = Option(2L),
      title = "이 번주 스칼라 소식1",
      content = "1. 스파크 속 아카 이야기, 2. 스칼라 데이즈 현장 취재",
      createdAt = Option(LocalDateTime.now),
      updatedAt = Option(LocalDateTime.now),
      author = "Lawrence Kim",
      tags = List("Scala", "Spark", "Akka", "ScalaDays2018")
    ),
    Article(id = Option(3L),
      title = "이 번주 스칼라 소식2",
      content = "1. 스파크 속 아카 이야기, 2. 스칼라 데이즈 현장 취재",
      createdAt = Option(LocalDateTime.now),
      updatedAt = Option(LocalDateTime.now),
      author = "Lawrence Kim",
      tags = List("Scala", "Spark", "Akka", "ScalaDays2018")
    ),
    Article(id = Option(4L),
      title = "이 번주 스칼라 소식3",
      content = "1. 스파크 속 아카 이야기, 2. 스칼라 데이즈 현장 취재",
      createdAt = Option(LocalDateTime.now),
      updatedAt = Option(LocalDateTime.now),
      author = "Lawrence Kim",
      tags = List("Scala", "Spark", "Akka", "ScalaDays2018")
    ),
    Article(id = Option(5L),
      title = "이 번주 스칼라 소식4",
      content = "1. 스파크 속 아카 이야기, 2. 스칼라 데이즈 현장 취재",
      createdAt = Option(LocalDateTime.now),
      updatedAt = Option(LocalDateTime.now),
      author = "Lawrence Kim",
      tags = List("Scala", "Spark", "Akka", "ScalaDays2018")
    ),
    Article(id = Option(6L),
      title = "이 번주 스칼라 소식5",
      content = "1. 스파크 속 아카 이야기, 2. 스칼라 데이즈 현장 취재",
      createdAt = Option(LocalDateTime.now),
      updatedAt = Option(LocalDateTime.now),
      author = "Lawrence Kim",
      tags = List("Scala", "Spark", "Akka", "ScalaDays2018")
    )
  )

  def count(): Long = articles.size

  def select(count: Option[Int], pages: Option[Int]): List[Article] = {
    articleRepository.get()
      .drop((pages.getOrElse(1) - 1) * 5)
      .take(count.getOrElse(Integer.MAX_VALUE))
  }

  def countByTag(tag: String): Long = articles.filter(a => a.tags.contains(tag)).size

  def getByTag(tag: String, count: Option[Int], pages: Option[Int]): List[Article] = {
    articleRepository.get()
      .filter(a => a.tags.contains(tag))
      .drop((pages.getOrElse(1) - 1) * 5)
      .take(count.getOrElse(Integer.MAX_VALUE))
  }

  def getById(id: Long): Article = articles.filter(_.id.get == id).head

  def save(article: Article): Article = {
    articleRepository.insert(article)
  }

  def modify(article: Article): Article = {
    articleRepository.update(article)
  }
}
