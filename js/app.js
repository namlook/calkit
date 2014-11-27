App = Ember.Application.create();

App.IndexController = Ember.Controller.extend({
    ajoutMensuel: 0,

    total: function() {
        var interets = parseFloat(this.get('interets'));
        var nbAnnees = parseFloat(this.get('nbAnnees'));
        var total = parseFloat(this.get('initMontant'));
        var ajoutMensuel = parseFloat(this.get('ajoutMensuel')) || 0;
        for (var i=0; i < nbAnnees; i++) {
            total += ajoutMensuel * 12;
            total = total + (total * interets/100);
        }
        return parseInt(total, 10);
    }.property('initMontant', 'interets', 'nbAnnees', 'ajoutMensuel'),

    capital: function() {
        var initMontant = parseInt(this.get('initMontant'), 10);
        var ajoutMensuel = parseInt(this.get('ajoutMensuel'), 10);
        var nbAnnees = parseInt(this.get('nbAnnees'), 10);
        return initMontant + ajoutMensuel * 12 * nbAnnees;
    }.property('initMontant', 'nbAnnees', 'ajoutMensuel'),

    cumulInterets: function() {
        return this.get('total') - this.get('capital');
    }.property('total', 'capital')
});