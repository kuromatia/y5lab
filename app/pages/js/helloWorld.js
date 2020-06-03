function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(width / 50);
  fill(0, 255, 0);
}

function draw() {
  // background(0);
  if (frameCount % 5 == 0){
    background(0);
  }
  text(txt.substr(0, cnt),0,0,width,height);
  cnt += 3;
}

var cnt = 0;

var txt = "#include <stdio.h> int main() { printf(\"Hello, C !\\n\"); return 0; }\n"+
          "#include <iostream> int main() { std::cout << \"Hello, C++ !\" << std::endl; return 0; }\n" +
          "public class Hello { public static void main(String[] args) { System.out.println(\"Hello, Java !\"); } }\n" +
          "using System; class Hello { static void Main(string[] args)Console.WriteLine(\"Hello, C# !\"); } }\n" +
          "package main import \"fmt\" func main() { fmt.Println(\"Hello, Go !\") }\n" +
          "console.log(\"Hello, Javascript !\");\n" +
          "<?php echo \"Hellom PHP !\".PHP_EOL;\n" +
          "main = putStrLn \"Hello, Haskell !\"\n" +
          "print(\"Hello, Python !\")\n" +
          "print \"Hello, Perl !\\n\";\n" +
          "print \"Hello, Groovy !\"\n" +
          "print(\"Hello, Swift !\")\n" +
          "println(\"Hello, Kotlin !\")\n" +
          "puts \"Hello, Ruby !\"\n" +
          "fn main() { io::println(\"hello, Rust !\"); }\n" +
          "printf (\"Hello, MATLAB !\\n\")\n" +
          "object Hello { def main(args: Array[String]) { println(\"Hello, Scala !\") } }\n" +
          "main() { print(\"Hello, Dart !\"); }\n" +
          "program main print *, \"Hello, FORTRAN !\" end program main\n" +
          ">+++++++++[<++++++++>-]<.>+++++++[<++++>-]<+.+++++++..+++.[-]>++++++++[<++++>-]<.\n>+++++++++++[<+++++>-]<.>++++++++[<+++>-]<.+++.------.--------.\n[-]>++++++++[<++++>-]<+.[-]++++++++++.\n" +
          "Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook. Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook! Ook! Ook? Ook! Ook. Ook? Ook. Ook. Ook. Ook. Ook! Ook. Ook. Ook? Ook. Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook. Ook. Ook? Ook. Ook. Ook. Ook. Ook! Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook. Ook. Ook? Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook. Ook. Ook? Ook. Ook. Ook! Ook. Ook. Ook? Ook! Ook."
