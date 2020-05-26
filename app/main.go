package main

import (
    "net/http"
    "github.com/gorilla/mux"
)


func main() {
    r := mux.NewRouter()
    r.Handle("/", http.FileServer(http.Dir("pages")))
    r.PathPrefix("/pages/").Handler(http.StripPrefix("/pages/", http.FileServer(http.Dir("pages/"))))
    http.Handle("/", r)
    http.ListenAndServe(":3000", nil)
}
