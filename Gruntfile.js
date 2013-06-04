var fs = require('fs');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['gruntfile.js', 'app/js/**/*.js', grunt.file.read('.jshintignore').trim().split('\n').map(function(s) { return '!' + s; })],
      options: {
        // options here to override JSHint defaults
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      test: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      src: {
        files: [
          'app/js/**/*.js', 
          'app/css/**/*.css',
          'app/**/*.html'
        ],
        options: {
          nospawn: true,
          livereload: 1337
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-livereload');

  grunt.registerTask('successbaby', 'Success baby tell me it passed!', function() {
    grunt.task.requires('jshint');

    var asci_baby =
    'IIIIIIIIIIII77II7I7:777~7II7777:7,7. 7=77,,  ~77?7 7 7=~7,7I777=7?7II??????III?I\n' +
    'IIIIIIIIIIII:?7~7:7+777?7I77 7 :7,7.7, I7,.77 77 77777=:7,7+7+7~7?7IIIIIIIIIIIII\n' +
    'IIIIIIIIIII7777,7:7?77:7+II7+77~777~7.7I7~777777777777=:777~7:7~777I7III77777777\n' +
    'IIIIIIIIIIIIIIIIIIIIIIIIII?+++=~~~~~,,~,::~::::::~::::~~=~=++?II7777777777777777\n' +
    'IIIIIIIIIIIIIIIIIIIIII7777= I777777.77:777.7:77,7.7,77=~~~==+?II7777777777777777\n' +
    'IIIIIIIIIIIIIIIIIIIIII~777:7?7,777.77.,~7~.7:77,7.7+7I7~====++?I7777II7777777777\n' +
    'IIIIIIIIIIIIIIIIIIIIII~777?7?7=777.,.77:7,.7:77,777+777~~~==+++?IIII777777777777\n' +
    'IIIIIIIIIIIIIIII777777777~77?7,7777=777,7:,7777,777,777~~===~=++?IIIIIII77777777\n' +
    '??????IIIIIIIIIIIIIIIII?++=+=~~:~:,,,,,:,,,,,,,,,,::::~~~~=~==+++?II777777777777\n' +
    '+++++???????IIIIIIIIII+?++++==~~::,:,:,:,,,,:,,,:,:::::~~~~====++??I777777777777\n' +
    '+++++????????????????++?++++=~~:,,:,::,:,::,,,::,:::~:~~~:~====+++?II77777777777\n' +
    '+++++?????????????????++++++=~~::::~,:::,,,,,:,::::~:::~~~===+=++++?II7777777777\n' +
    '++++????????????????+++?+?+==:~~:~~::::::::::,::::~~~~:~~~~=====++++?+IIIIIIIIII\n' +
    '+++++??????????????I+++???+=~~~:~~:::~~::~~~:~:::~~=~~:~~~~=======+??IIIIIIIIIII\n' +
    '++++++??????????????+++??+~~~~~~:~~==~:~~~~:~:::~====~~~~~=~+======++IIIIIIIIIII\n' +
    '+++++???????????????=????~+=~==:====:~~==:~:~~~======~======+=~~~~=++IIIIIIIIIII\n' +
    '++++++??????????????=????+~++~==+=~~===~~==========+=:=~==~++=~~~~=+?IIIIIIIIIII\n' +
    '++++++?????????????+=???+++++++======================:=~==~+==~:~~=+IIIIIIIIIIII\n' +
    '++++++?????????????+?II???+++++++++======================+++==~:=~=+IIIIIIIIIIII\n' +
    '++++++?????????????+III????+++++++===++================~=+=++=~~~==IIIIIIIIIIIII\n' +
    '++++++????????????I?III?+++++++++=======================+++++=~===+III?I?I????II\n' +
    '+++++++?????????????I??++=============+============+==+++++++=~~==??II??????????\n' +
    '+++????????????????II??++====~~~~~==============~====++++++++=====???????????+++\n' +
    '+??????????????????I??+=,.:~:...:==========~~~~~~==~~==++++++++===+I???+==++===~\n' +
    '++?????????????????I?????+~=,,,.:==++=====~~~:...:~=====+++???++=????+++++=~~~~~\n' +
    '+++????????????????III??++?+=====++++++====~,=.....,.:==++++??+~=++++=++===~~==+\n' +
    '++?????????????????I??????++++++++???+++++==~===~~:~~::==+++??===~==========++++\n' +
    '+++?????????????????????????++++++??+++++++===~~==+++++++++++?~===+++++?????????\n' +
    '++=+???+++????????I??I?????++++==+???+++==++++++++++++++++++??:==++?????????????\n' +
    '+++???????????????????????++====???++++====~++++++++++++++?++~~=+++++???????????\n' +
    '+++++++++??????????????++++======~:==~==~==~=+++++++???+++++?+=====+?+++??++++++\n' +
    '+++++????????IIIIII???++++=====+++++=~~~~~~===++++++++??+++?=+++====+++?+======+\n' +
    '??++????????II???????++++======+++============++++++++++++??++??++++?++++======+\n' +
    '??????????+???++++??+++++===~~:,::~~~::~~=======+====+++++?==III?????????++++++?\n' +
    '++++++++++===++?????+++++===~~=++++++=++==:,~=========+++??:~==+I??????IIIIIIIII\n' +
    '=+++?????????????????++++====++++===~==================++?:::?I???+?IIIIIII?IIII\n' +
    '==++???????????????++?+===~==++=====+==========+=======++~:,,II???II??II?????III\n' +
    '++++++?????+?????+??????~~=~=====++=====~==============+:,,,=III???I?I+IIIIIIIII\n' +
    '++++++??????+?????+=~~~::+?~~~==~===~~~~~~~~==~=======+:,,,:??II????I??IIIIIIIII\n' +
    '++++???????++????==~::::,,::~+=~~~~~=~~~~~===~======::::,,:+I?III????I??IIIIIIII\n' +
    '???????????????+~~~~~:::,,,,,,,,,,:====~=====~,..,,,,,,,,,?I???III???????I??IIII\n' +
    '?????????????+===~~~:::::,:,,,,,,.................,,,,,,+???????IIII???I?I+IIIII\n' +
    '????????????==~~~~~~~:,:,,,,,,,,..................,,,=?????I????IIIII???II?=?III\n' +
    '???????????===~~~=~~~~:::,,,=+?+?+:,...........,,:+??????II?I???IIIIII???II==III\n' +
    '??????????==:::~:,,,,:::,,,????I??++?+++++++?++??????????III????II???II??II~==II\n' +
    '?????????==:,,::,,...,::::??++???++++???+?????????????????II????II?????I??I=~~?I\n' +
    '?+??????=~~:,,,,,,,,..,::I?I==??++++~+++???????????????????II???????????????:,~I\n' +
    '???????+~~~::,,,,,,,,,.,~?+?+???+++=+++++???????????????????II??I???????????,,~=\n' +
    '++????+~~~~:::,,,,,,,,,.??+????+++++++++++++????????????????I?I?I???????????~::~\n' +
    '+?????~~~~~::::,,,,,,,,~??????+++++++=+++=+++????????????????????????????????,:=\n' +
    '++???+:~~~~:::::,,,,,,~:????+++==+====++++++++?????????????????I?????????????::~\n' +
    '++???~:~~~~::,. 77,?77:7777++7.777~=77,7,7777?7?7?7,7,77I7?7?777+I???????????+~~\n' +
    '+++++::~~~:::,.7,7.7+7:7?77==7,77:~=:7?7~7~77? 77?777,7 I7I ?7::,II???????????:~\n' +
    '?+??~,~~:,,::,.7,7.7.7.7?77==7,,:77~:77:77:77?777?777,7 I777?7:7,????I????????~:\n' +
    '++??:,~~,,,~:,.777.7.777777=~7,7 77~~77~77=77?7=7?7I7,7 I7=7?777,???????????+??:\n' +
    '+++=:,~:,,~:,,,,,...=~::,,,.:~~~~~~~~~~~~~~~~~+?????????++???+?+????????????+++~\n' +
    '................................................................................\n';

    console.log(asci_baby);
  });

  grunt.registerTask('default', ['jshint','successbaby']);
};

