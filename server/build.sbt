name := """server"""
organization := "com.betterthanscala"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.6"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test
libraryDependencies += "default" %% "remove-markdown-scala" % "0.1-SNAPSHOT"

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.betterthanscala.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.betterthanscala.binders._"
