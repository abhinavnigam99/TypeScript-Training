# TypeScript-Training
TypeScript Start

Tut 1 : Starting with Typescript

    Create a .ts file.
    Install tsc(typescript compiler) using npm i typescript -g
    Type tsc filename.ts
    A new .js file will be compiled into.
    Run it using node filename.js

Tut 2 : Compiling multiple files into single .js file

    Create multiple .TS file
    Compile using command: tsc --out filename.js filename1.ts filename2.ts filename3.ts
    Run the .js using command : node filename.js

Tut 3 : Data Types
    
    number, boolean, string and any
    any defines the data type at runtime.
    var variable_name : data_type = value;

Tut 3: Functions

    Non-Parameterised, Parameterised, Default, Fat / Arrow / Pointer / Lambda

Tut 4: Class

    inside a class members and functions are to be declared directly without any keyword.
    to access and data member inside function use this keyword.
    initialise the object of class and call members and functions.
    when .js file is created after compilation:
        class is treated as function.
        members are defined under constructor.
        function is defined as prototype.
    Accessors: public,private,protected

Tut 5: Inheritance
    can only be used to extend one class
    
Tut 6: Interface
    used to implement multiple inheritance.
    used using implements keyword
    alias is also possible using keyword 'as'
