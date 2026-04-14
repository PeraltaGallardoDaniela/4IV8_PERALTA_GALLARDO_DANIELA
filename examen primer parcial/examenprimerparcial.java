import java.util.Scanner;

public class examenprimerparcial {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // COMMIT 1: Variables para datos personales
        String nombre = "", apellidoP = "", apellidoM = "", fechaNacimiento = "";
        boolean datosCapturados = false;
        int opcion;

        // COMMIT 2: Menú con ciclo repetitivo
        do {
            System.out.println("\n--- MENÚ PRINCIPAL ---");
            System.out.println("1. Capturar datos personales");
            System.out.println("2. Calcular volumen (Dodecaedro e Icosaedro)");
            System.out.println("3. Salir");
            System.out.print("Seleccione una opción: ");

            // Validación de entrada para evitar errores si ingresan letras
            while (!sc.hasNextInt()) {
                System.out.println("Error: Ingresa un número válido.");
                sc.next();
            }
            opcion = sc.nextInt();
            sc.nextLine(); // Limpiar el buffer

            switch (opcion) {

                case 1:
                    // COMMIT 3: Captura de datos
                    System.out.print("Nombre: ");
                    nombre = sc.nextLine().trim();
                    System.out.print("Apellido Paterno: ");
                    apellidoP = sc.nextLine().trim();
                    System.out.print("Apellido Materno: ");
                    apellidoM = sc.nextLine().trim();
                    System.out.print("Fecha de nacimiento: ");
                    fechaNacimiento = sc.nextLine().trim();

                    if (nombre.isEmpty() || apellidoP.isEmpty() || apellidoM.isEmpty()) {
                        System.out.println("Error: No se permiten campos vacíos.");
                    } else {
                        datosCapturados = true;
                        System.out.println("Datos guardados correctamente.");
                    }
                    break;

                case 2:
                    // COMMIT 4: Cálculo de volúmenes solicitados
                    System.out.print("Ingrese el valor de la arista (a): ");
                    while (!sc.hasNextDouble()) {
                        System.out.println("Error: Ingrese un valor numérico.");
                        sc.next();
                    }
                    double arista = sc.nextDouble();

                    // Volumen Dodecaedro: ((15 + 7√5) / 4) * a³
                    double volDodecaedro = ((15 + 7 * Math.sqrt(5)) / 4) * Math.pow(arista, 3);
                    
                    // Volumen Icosaedro: (5/12) * (3 + √5) * a³
                    double volIcosaedro = (5.0 / 12.0) * (3 + Math.sqrt(5)) * Math.pow(arista, 3);

                    System.out.println("\n--- RESULTADOS ---");
                    System.out.printf("Volumen del Dodecaedro: %.4f\n", volDodecaedro);
                    System.out.printf("Volumen del Icosaedro: %.4f\n", volIcosaedro);
                    break;

                case 3:
                    // COMMIT 5: Mostrar datos al salir (según premisa del examen)
                    System.out.println("\n--- REPORTE FINAL ---");
                    if (datosCapturados) {
                        System.out.println("Nombre: " + nombre + " " + apellidoP + " " + apellidoM);
                        System.out.println("Fecha de nacimiento: " + fechaNacimiento);
                    } else {
                        System.out.println("No se capturaron datos personales.");
                    }
                    System.out.println("Programa finalizado.");
                    break;

                default:
                    System.out.println("Opción inválida.");
            }

        } while (opcion != 3);

        sc.close();
    }
}
            
        
        
    

