parser grammar sequenceParser;

options {
  tokenVocab = sequenceLexer;
}

prog
 : EOF                        // Nothing needs to be a valid prog
 |(LT | participant)+ EOF     //  swallow '<' so it is not rendered to the diagram
 | participant* starterExp EOF
 | participant* starterExp? block EOF // The final complete syntax
 ;

starterExp
 : AT STARTER_LXR OPAR starter? CPAR
 ;

starter
 : ID
 ;

participant
 : stereotype? name width?
 | stereotype
 | name width?
 ;

stereotype
 : SOPEN
 | SOPEN name
 | SOPEN name GT
 | SOPEN GT         // Some people may write <<>> first then put in the interface name
 | SOPEN SCLOSE
 | SOPEN name SCLOSE
 ;

name
 : (ID | STRING)
 ;

width
 : INT
 ;

block
 : (CR* stat CR*)+ ret?
 ;

ret
 : RETURN value SCOL?
 ;

value
 : (atom | ID)
 ;

stat
 : alt
 | loop
 | creation
 | asyncMessage
 | message
 | anonymousBlock
 | ret
 | OTHER {console.log("unknown char: " + $OTHER.text);}
 ;

anonymousBlock
 : braceBlock
 ;

creation
 : assignment? NEW constructor(OPAR parameters? CPAR)? (SCOL | braceBlock)?
 ;

message
 : assignment? func (SCOL | braceBlock)?
 ;

/**
 * Order is impportant below. This allows the follow three status being valid:
 * a. A - participant
 * b. A. - func matched by `to DOT`
 * c. A.m - func matched `to DOT signagure`
 * Also we support chained method, such as m1().m2()
 */
func
 : (((from ARROW)? to DOT signature) | (to DOT) | (signature)) (DOT signature)*
 ;

from
 : ID
 ;

signature
 : methodName invocation?
 ;

invocation
 : OPAR
 | OPAR parameters? CPAR
 ;

assignment
 : (type? assignee ASSIGN)
 ;

asyncMessage
 : (source ARROW)? target COL content
 ;

content
 : EVENT_PAYLOAD_LXR EVENT_END?
 ;

source
 : ID
 ;

target
 : ID | STRING
 ;

constructor
 : ID
 ;

type
 : ID
 ;

assignee
 : (ID (COMMA ID)*) | STRING
 ;

to
 : ID | STRING
 ;

methodName
 : ID | STRING
 ;

parameters
 : parameter (COMMA parameter)*
 ;

parameter
 : declaration | ID | atom | expr | creation
 ;

declaration
 : type ID
 ;

alt
 : ifBlock elseIfBlock* elseBlock?
 ;

ifBlock
 : IF parExpr braceBlock
 | IF parExpr
 ;

elseIfBlock
 : ELSE IF parExpr braceBlock
 ;

elseBlock
 : ELSE braceBlock
 ;

braceBlock
 : OBRACE block? CBRACE
 ;

loop
 : WHILE parExpr braceBlock
 ;

expr
 : MINUS expr                           #unaryMinusExpr
 | NOT expr                             #notExpr
 | expr op=(MULT | DIV | MOD) expr      #multiplicationExpr
 | expr op=(PLUS | MINUS) expr          #additiveExpr
 | expr op=(LTEQ | GTEQ | LT | GT) expr #relationalExpr
 | expr op=(EQ | NEQ) expr              #equalityExpr
 | expr AND expr                        #andExpr
 | expr OR expr                         #orExpr
 | expr PLUS expr                       #plusExpr
 | func                                 #funcExpr
 | creation                             #creationExpr
 | atom                                 #atomExpr
 ;

atom
 : (INT | FLOAT)  #numberAtom
 | (TRUE | FALSE) #booleanAtom
 | ID             #idAtom
 | STRING         #stringAtom
 | NIL            #nilAtom
 ;

parExpr
 : OPAR condition CPAR
 ;

condition
 : atom
 | expr
 ;

