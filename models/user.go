package models

import "time"

//User - Dados do usuário
type User struct {
	ID        string    `json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	CreatedAt time.Time `json:"created_at"`
	UpdateAt  time.Time `json:"updated_at, onitempty"`
}

//Users - Listas de usuários
type Users []User
