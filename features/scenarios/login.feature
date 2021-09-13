Feature: WEB - Prueba para Cencosud 

    Scenario: Como un usuario quisiera realizar una compra
        Given Ingreso a la pantalla de login
        When Realizo 1000 pedidos
        Then retorna la pagina home

