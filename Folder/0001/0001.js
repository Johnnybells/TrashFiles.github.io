var pp = '    during the Trom era there was a Trashcan named Tromov Icomu. Tromov lived from the age of zero to thirty in the Donta Era in which the Donta siblings ruled three sections of the world. Tromov lived in Sumina ruled by Travis Donta. Tromov at age thirty-one started the Santov rebellion, the Santov rebellion had a peak of 3 million members, 2 million trashcans and 1 million humans. During the Red night the Sumina was taken by the Santov rebellion, 6 million trashcans and 3 million humans died during the Red night. Tromov now ruling the Sumina region disbanded the Santov rebellion and formed the Suntovina circle with 10 trashcan members. With the Suntovinan tatics they newly founded country of Sutov successfully invaded the Trantnick faction. After taking two factions Tromov disbanded the Suntovinan Circle and waged war on Cragnot. After taking Cragnot at the end of a ten year war Tromov declared himself Emporer of the world starting The Trom Era. Tromov ruled with an iron fist, any rebellion no matter how small could cause jail time or the worse public torture where they would torture you until you died. After sixty years of Tromov\'s rule four rebellions existed under the radar including the Flontos, the Tanto, the Soupma, and the Golden Canta. The Golden Canta was lead by Tomvanu Tromov\'s son after years of neglect. The four rebellions allied creating the Tomoto to declare war on Sutov, Tromov upon receiving the news of war orded a full fledged attack on the Tomoto. The attack caused the Weekend Bloodbath in whihch both sides attacked each other with everything they got. The Weekend Bloodbath turned the 3 billion world population into 300 million, at the end of the Weekend Bloodbath after fleeing from his palace in a crushing defeat learned that his son had died in the Weekend Bloodbath. In despair Tromov Killed himself ending The Trom Era with Sutov falling to Tomoto.'
var line = ''
i = 0
for (letter in pp){
    i++
    if (i == 116){
        document.write('<p style="text-align: center;">' + line + '</p>')
        line = ''
        i = 0
    }
    line += pp[letter]
}