# ¿Qué es RinFox?
![](banner.png) ![](banner-ie8.png)

Rinfox es un tema para Mozilla Firefox 115ESR que copia la apariencia de Internet Explorer 7 (y 8). El nombre Rinfox de debe a "Rincon" (Nombre en clave de IE7) y fué creado por [travis](https://github.com/travy-patty) quien también creó [Windows eXPerience](https://experience.noncities.com/). Este proyecto se basa en la versión 0.4.1 del tema, con arreglos y añadidos (todavia falta hacer muchas cosas).

## Características

* Barra de herramientas personalizadas con iconos e interfaz idénticas
* Barra de búsqueda y menú con la misma apariencia.
* Soporte completo para Aero y temas con soporte a Aero (en msstyles).
* Logo InPrivate en el modo de navegación privada.
* Páginas personalizadas para la nueva pestaña, página de inicio y navegación InPrivate.
* Extensión TipTab para asemejarse al menú Pestañas Rápidas.
* Menú `Acerca de...` personalizado para verse idéntico al de IE7/8.
* Iconos de Internet Explorer 7/8.
* Switch activable para alternar entre la interfaz de IE7 e IE8.
* Compatible con Firefox 115ESR.
* *Opcionalmente, se puede modificar para que funcione en Waterfox.*

###### Modo Internet Explorer 7 (predeterminado) con iconos y diseño aplicados, aero y ediciones a omni.ja con estilo de IE7:
![](screen_2.png)
###### Modo Internet Explorer 8 con iconos y diseño aplicados, aero y ediciones a omni.ja con estilo de IE8:
![](screen_3.png)
###### (Capturas en inglés)

## Instalación

###### Este tema es compatible con 115ESR y se aconseja usarlo. ESR recibe actualizaciones de seguridad por mas tiempo comparado con las versiones normales de Firefox y las actualizaciones pueden no romper los temas. A partir de Firefox 117, Mozilla dejó de soportar Windows 7 y por ende eliminando la capacidad de usar temas de Aero con este.

1. Descarga e instala [Firefox 115 ESR](https://ftp.mozilla.org/pub/firefox/releases/115.3.1esr/win64/es-ES/)
2. Una vez instalado, ve a Acerca de Firefox y deja que se actualice al último parche de seguridad.
3. Ahora que Firefox está actualizado, podemos empezar a aplicar el tema. En Firefox, escribe about:config en la barra de direcciones y busca y edita los siguientes valores:

* `toolkit.legacyUserProfileCustomizations.stylesheets` == Booleano == true
* `browser.theme.dark-private-windows` == Booleano == false
* `browser.display.windows.non_native_menus` == Número == 0
* `ui.prefersReducedMotion` == **Crear como Número** == 1
* `browser.privateWindowSeparation.enabled` == Booleano == false
* `browser.tabs.secondaryTextUnsupportedLocales` == Cadena == Agrega tu idioma junto a los demás (ej. `en, es`)
* `rinfox.extra.moremenus` == **crear como Booleano** == true

###### Gracias a una nueva actualización, ahora puedes elegir entre Traducciones. Elige el que mas te guste y asegúrate de ir copiando solo las carpetas como se indica a continuación.

4. Ve al directorio donde instalaste Firefox (normalmente en C:\Program Files\Mozilla Firefox) y copia los **contenidos** de la carpeta `ffroot` dentro de la carpeta `rinfox\Spanish`  dentro de éste, y reemplaza los archivos si se le pregunta.
5. Abre Firefox, escribe `about:support` en la barra de direcciones. Busca hasta que encuentres una pestaña que diga `Carpeta del perfil` y haz clic en `Abrir carpeta`. Copia la carpeta "chrome" dentro de la carpeta `rinfox\Spanish` dentro de ésta. Ademas dentro de `about:support` sube y haz clic en `Limpiar caché de inicio...`.
6. Deja que Firefox se reinicie.
7. El tema esta aplicado, pero el orden de los elementos no se ve bien. Para arreglar esto haz clic derecho en la barra de pestañas y luego en "Personalizar barra de herramientas".
  * Si tienes el tema oscuro de Windows, el tema no se verá bien, así que desactivalo yendo a `about:addons` > Temas > y activa el tema claro
9. En la pestaña que se abre, marca la casilla `Barra de titulo` abajo del todo, y quita todo lo que se pueda quitar de la barra de herramientas haciendo clic derecho en el elemento y luego en "Quitar de la barra de herramientas". Ahora agrega poco a poco los elementos copiando el diseño que se muestra en la imagen:
![](ie7%20layout.png)
   * Recordar que la barra de menú está oculta, y queza debas desmarcar la opción de "Ocultar descargas".
10. Para tener Pestañas Rápidas [puedes instalar TipTab de la tienda de add-ons de Firefox](https://addons.mozilla.org/es-ES/firefox/addon/tip-tab/). Sólo fíjalo a la barra de herramientas y colócalo en su sitio.
11. Para tener los encabezados de RSS. [puedes instalar Feedbro de la tienda de add-ons de Firefox](https://addons.mozilla.org/en-US/firefox/addon/feedbroreader/). Simplemente fíjalo a la barra de herramientas y colócalo en su sitio.
12. Para tener el botón de Añadir a favoritos de IE8, [puedes instalar "Add to Favorites Bar" desde la tienda de add-ons de Firefox](https://addons.mozilla.org/en-US/firefox/addon/add-to-favorites-bar/). Sólo fíjalo a la barra de herramientas y colócalo en la barra de marcadores **Nota, solo en el modo IE8, también la extensión sólo está en inglés**.
13. Ahora sería una buena idea desactivar las actualizaciones de Firefox. Aunque actualizar Firefox ESR **no debería** romper cosas, siempre va a romper cambios a omni.ja (página de inicio, página de inprivate y nueva pestaña) junto que los iconos (iconos de Firefox) serán revertidos, si esto no te importa mucho puedes simplemente omitir este paso. Y si quieres desactivarlo, puedes hacerlo [siguiendo la siguiente guía](https://www.askvg.com/tip-disable-automatic-updates-in-mozilla-firefox/#how_to_disable_automatic_updates_in_mozilla_firefox) (en inglés):

## Tematizando TipTab para que se vea como las Pestañas Rápidas de IE

1. Asegúrate de que instalaste TipTab de la tienda de add-ons de Firefox (ver arriba).
2. Abre TipTab haciendo click en el.
3. Dentro de la página de TipTab en la parte superior derecha, ve al menú (ícono ☰) > Opciones. Dentro de "General" desmarca/desactiva "Abrir Tip Tab en una nueva ventana." Cierra la página de Options, volviendo a la página de inicio de TipTab.
4. Dentro de la extensión, tome nota de la URL, debería ser así: `moz-extension://0da9fe6f-2311-4d70-961b-5f3630959b6c/tiptab.html`, **lo de `(0da9fe6f-2311-4d70-961b-5f3630959b6c` cambiará en tu equipo)**. Ve a la carpeta de "chrome" dónde pegaste el tema de rinfox, y dentro de este abre **userContent.css** en el Bloc de notas o cualquier editor de texto. Reemplaza la URL anotada en `@-moz-document url-prefix(moz-extension://0da9fe6f-2311-4d70-961b-5f3630959b6c/tiptab.html)`. Copia y pega la URL dentri de los paréntesis () de la porción de `url-prefix`.
5. Guarda el archivo y cierra y vuelve a abrir Firefox. TipTab ahora debería tener el tema.

## Alternar entre el modo Internet Explorer 7 y el modo Internet Explorer 8

1. Al cambiar de modo, ocurrirán cambios como el de la ventana "Acerca de Firefox", y tambien el diseño va a cambiar.
2. Para hacer esto, abre Firefox y escribe `about:config` en la barra de direcciones, y agrega el siguiente valor:

* `rinfox.tweak.ie8` == **crear como Booleano** == true

3. Reinicia Firefox. Ahora verás que el diseño cambió, pero el orden de los elementos no se ve bien. Para arreglar esto haz clic derecho en la barra de pestañas y luego en "Personalizar barra de herramientas".
4. En la pestaña que se abre, Agrega de vuelta la pestaña de Marcadores y y edita poco a poco los elementos copiando el diseño que se muestra en la imagen::
![](ie8layout.png)
* Nota: debe añadir la Biblioteca, la extensión de IE8 de Añadir a la barra de favoritos (ver arriba) **Y un separador** (en "Configuration Toolbar": el del medio - una línea recta en verdical) despues de este. No te preocupes si no se ve como en la imagen, se arreglará solo.
5. Haz clic en Listo. Si el diseño se ve raro (ejemplo, los iconos se ven muy grandes), quizá debas reiniciar tu PC. y despues del reinicio, debería haberse arreglado.
  
## Extras

* Esta parte es opcional, sin embargo, hace que el tema se vea más convincente en general. Los extras incluyen el reemplazo de la página de inicio, la página Nueva pestaña y la página inPrivate (ajustes de omni.ja), y le permiten reemplazar el ícono de Firefox en todo el sistema, además de habilitar Aero para los temas que lo admiten.
* **Se recomienda utilizar esta parte con actualizaciones deshabilitadas, ya que los archivos *serán reemplazados nuevamente* cuando se instale una nueva actualización de ESR.**

### Reemplazar íconos de Firefox y activar Aero

1. Descarga e instala [Resource Hacker](http://www.angusj.com/resourcehacker/)
2. Abre Resource Hacker y busca y abre `firefox.exe` dentro de la carpeta de instalación de Firefox (generalmente dentro de C:\Program Files\Mozilla Firefox).
3. Edite los siguientes valores a continucación:

  3.1. Dentro de `String Table` cambia "Firefox" a "Internet Explorer" y luego haz clic en Compilar (el botón verde) o pulsa F5.

  3.2. Dentro de `Icon Group` busca IconGroup 1, 2, 5, 6 y 32512, haga clic derecho y presione Cambiar recurso y reemplace cada uno con los .icos dentro de la carpeta "icon and aero" según corresponda.

  3.3. Dentro de `Manifest` elimina todos los ID de compatibilidad **excepto** el último (solo debe quedar `<supportedOS Id="{35138b9a-5d96-4fbd-8e2d-a2440225f93a}"/>`), y luego haz clic Compilar (el botón verde) o pulsa F5.

4. Haz clic en Archivo > Guardar y guárdalo como `firefox.exe` en el escritorio. Haga Ctrl+C y Ctrl+V y reemplaza firefox.exe de la carpeta de instalación.

### Mejoras a Omni.ja

###### Gracias a una nueva actualización, ahora puedes elegir entre Traducciones y estilo de páginas (estilo Internet Explorer 7 o estilo Internet Explorer 8). Elija el que desees y asegúrate de comenzar a copiar solo la carpeta "chrome" como se indica a continuación.
1. Vaya a la carpeta de instalación de Firefox (normalmente dentro de C:\Program Files\Mozilla Firefox) > carpeta "browser". Allí deberías encontrar un archivo llamado `omni.ja`. Simplemente ábrelo con WinRar o 7Zip y extráelo en algún lugar de tu escritorio.
2. Copia y reemplaza la carpeta "chrome" dentro de los archivos extraídos.
3. Compríme nuevamente todo en un zip (sin crear carpetas adicionales). Cambie la extensión de .zip a .ja.
4. Copia y reemplaza omni.ja. El resultado final deberia verse así (toma en cuenta los contenidos y ubicación del archivo)
![](omni%20ja%20contents.png) 
5. Abre Firefox, ve a Ajustes > Inicio y cambia dentro de Nuevas ventanas y pestañas:
  * Página de inicio y nuevas ventanas > Página de inicio de Firefox (predeterminado)
  * Nuevas pestañas > Página en blanco
6. Regresa a Ajustes > Privacidad & seguridad > Borrar datos. Marque solo Cookies y Datos del sitio y luego presione Borrar.
7. Regrese a Configuración > Privacidad y seguridad > Historial (desplácese hacia abajo). En el menú desplegable junto a Firefox, elija "Usar una configuración personalizada para el historial". Activa "Limpiar el historial cuando Firefox se cierre" y presione el botón "Configuración...". Dentro del cuadro de diálogo de configuración, desmarca todo excepto Caché (solo debes marcar Caché). Haz clic en Aceptar.
8. Finalmente, vaya a la carpeta de instalación de Firefox y haga clic derecho en firefox.exe > Enviar a > Escritorio (crear acceso directo).
9. Vaya al acceso directo, haga clic derecho sobre él > Propiedades > Acceso directo y en "Destino", cámbialo a:
  * "C:\Program Files\Mozilla Firefox\firefox.exe" --purgecaches --purgecache
10. Presione Aplicar, y de ahí Aceptar. Deberías abrir Firefox desde este acceso directo, así que anclalo a la barra de tareas y/o envíalo al menú Inicio.

### Para tener las scrollbars nativas del sistema, haz clic [aquí](https://github.com/ephemeralViolette/firefox-native-controls)

## Creditos

### Desarrollo de Rinfox
* [travis](https://github.com/travy-patty)
* [angelbruni](https://github.com/brunobits)
* RandomFIFA64#7391
* [Tip Tab por William Wong](https://addons.mozilla.org/en-US/firefox/addon/tip-tab/)
* [Feedbro por Nodetics](https://addons.mozilla.org/en-US/firefox/addon/feedbroreader/)
* [Add To Favorites Bar por mí/florin](https://addons.mozilla.org/en-US/firefox/addon/add-to-favorites-bar/)
* Mozilla por crear Firefox.
* Microsoft por crear IE7/8.

### Traducciones
* Inglés - yo (florin)
* Rumano - yo (florin)
* Español - [luisl173](https://github.com/luisl173)
