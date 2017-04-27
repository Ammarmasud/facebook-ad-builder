describe('test example', function() {
  beforeEach(angular.mock.module('myApp'));

  let myCtrl, compile, scope, dirElm;

  beforeEach(inject(function($compile, $rootScope, $controller) {
    compile = $compile;
    scope = $rootScope.$new();
    myCtrl = $controller('myCtrl', {
      $scope: scope
    });
  }));

  function getCompiledElement(){
    const element = angular.element('<ad-preview></ad-preview>');
    const compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it('Change to store name = change to ad preview title', function () {
    scope.storeName = "testing store name";

    dirElm = getCompiledElement();
    const testStoreName = dirElm.find('strong')[0].innerText;
    expect(testStoreName).toBeDefined();
    expect(testStoreName).toEqual(scope.storeName);
  });

  it('Change to adText = change to ad preview text', function () {
    scope.adText = "testing ad text";

    dirElm = getCompiledElement();
    const testadText = dirElm.find('p')[0].innerText;
    expect(testadText).toBeDefined();
    expect(testadText).toEqual(scope.adText);
  });

  it('Change to a urlTitle = change to ad preview urlTitle', function () {
    scope.urlTitle = "testing url title";

    dirElm = getCompiledElement();
    const testurlTitle = dirElm.find('strong')[1].innerText;
    expect(testurlTitle).toBeDefined();
    expect(testurlTitle).toEqual(scope.urlTitle);
  });

});