package main

import (
    "fmt"
    "net/http"

    "github.com/gorilla/mux"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Println("Hello!!!!!!")
}

func main() {

    r := mux.NewRouter()
    r.Handle("/", http.FileServer(http.Dir("pages")))
    // r.HandleFunc("/", homeHandler)
    // http.Handle("/", http.FileServer(http.Dir("pages")))
    r.PathPrefix("/pages/").Handler(http.StripPrefix("/pages/", http.FileServer(http.Dir("pages/"))))
    http.Handle("/", r)
    http.ListenAndServe(":3000", nil)
}
