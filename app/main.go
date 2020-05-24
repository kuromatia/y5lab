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
    r.HandleFunc("/", homeHandler)
    r.PathPrefix("/pages/").Handler(http.StripPrefix("/pages/", http.FileServer(http.Dir("pages/"))))
    http.Handle("/", r)
    http.ListenAndServe(":3000", nil)
}
