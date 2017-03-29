/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/
for (var i = 1; i<=100; i++)
{
console.log(i);
}



/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

for(var i=1;i <=7;i++)
{
    outputTrangle(i);
}



function outputTrangle(cnt)
{
switch (cnt){
 case 1:
   console.log('#')
   break;
 case 2:
   console.log('##')
   break;
 case 3:
   console.log('###')
   break;
 case 4:
   console.log('####')
   break;
 case 5:
   console.log('#####')
   break;
 case 6:
   console.log('######')
   break;
 case 7:
   console.log('#######')
   break;


}
 

}