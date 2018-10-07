module.exports = function(grunt){
    
    //configuration
    grunt.initConfig({
        //pass in option to plugins, references to files 
        
        less: {
            development: {
                option: {
                    paths : ["less/"]
                },
                files: {
                    "assets/styles/css/styles.css":"assets/styles/less/styles.less"
                }
            }
        }

    });


    //Regeste Tasks
    grunt.registerTask('run',function(){
        console.log("am running ");
    });
    grunt.registerTask('sleep',function(){
        console.log("am sleeping ");
    });


    grunt.loadNpmTasks('grunt-contrib-less');

    
};