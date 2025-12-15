https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Error.html

An Error is a subclass of Throwable that indicates serious problems that a reasonable application should not try to catch. Most such errors are abnormal conditions. The ThreadDeath error, though a "normal" condition, is also a subclass of Error because most applications should not try to catch it.

```java
public class Error extends Throwable {
    @java.io.Serial
    static final long serialVersionUID = 4980196508277280342L;

    public Error() {
        super();
    }

    public Error(String message) {
        super(message);
    }

    public Error(String message, Throwable cause) {
        super(message, cause);
    }

    public Error(Throwable cause) {
        super(cause);
    }

    protected Error(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
```
