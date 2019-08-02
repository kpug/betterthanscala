package utils

/**
  *
  * @author Lawrence
  * @since 2019.07.14
  * @note
  * @version
  */
object HashUtils {
  def md5HashString(s: String): String = {
    import java.security.MessageDigest
    import java.math.BigInteger
    val md = MessageDigest.getInstance("MD5")
    val digest = md.digest(s.getBytes)
    val bigInt = new BigInteger(1, digest)
    bigInt.toString(16)
  }
}
