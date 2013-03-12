#
# Launches two separate gnome terminals. One with testacular server
# and the other with livereload plugin started.
#
# Works under ubuntu 12.04, gnome-classic theme, and with livereload and
# testacular installed with default configurations.
#
# If somebod y asks for them , I'd commit Guardfiles and Gemfiles
#
gnome-terminal --tab -t testacular -e "testacular start test/testacular.conf.js" --tab -e "livereload" -t livereload
