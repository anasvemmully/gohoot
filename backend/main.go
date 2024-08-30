package main

import (
	"backend-gohoot/handlers"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	handlers.SetupRoutes(r)

	log.Println("Server started at :8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
