(function() {

    function walk(node) 
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
    
            case 3: // Text node
                handleText(node);
                break;
        }
    }
    
    function handleText(textNode)
    {
        var v = textNode.nodeValue;
    
	// Cody is Cody
	v = v.replace(/\bKote\b/g, "Cody (in a weird accent)");
	v = v.replace(/\bkote\b/g, "cody (in a weird accent)");
	v = v.replace(/\bKOTE\b/g, "CODY (in a weird accent)");

	// vod means bro, bro
	// there may be issues with VOD being replaced, if so that line may be removed
	v = v.replace(/\bVod\b/g, "Bro");
	v = v.replace(/\bvod\b/g, "bro");
	v = v.replace(/\bVOD\b/g, "BRO");

	//alor? you mean king, right?
	v = v.replace(/\balor\b/g, "king");
	v = v.replace(/\bAlor\b/g, "King");
	v = v.replace(/\bALOR\b/g, "KING");

	// the bro-est king you ever saw
	v = v.replace(/\bvod'alor\b/g, "bro-king");
	v = v.replace(/\bVod'Alor\b/g, "Bro-King");
	v = v.replace(/\bVod'alor\b/g, "Bro-king");
	v = v.replace(/\bvod'Alor\b/g, "bro-King");
    
        textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
        // Dear Mozilla: I hate you for making me do this.
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
