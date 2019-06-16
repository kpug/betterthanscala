name := """server"""
organization := "com.betterthanscala"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.6"

libraryDependencies += guice
libraryDependencies += jdbc
libraryDependencies += "org.mariadb.jdbc" % "mariadb-java-client" % "2.4.1"
libraryDependencies += "org.playframework.anorm" %% "anorm" % "2.6.2"
libraryDependencies += "default" %% "remove-markdown-scala" % "0.1-SNAPSHOT"
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test


// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.betterthanscala.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.betterthanscala.binders._"
