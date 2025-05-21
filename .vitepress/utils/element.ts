type IdSelector = `#${string}`;
type ClassSelector = `.${string}`;

interface QueryElementBySelector {
  <E extends HTMLElement, S extends IdSelector = IdSelector>(s: S): E | null;
  <E extends Element, S extends ClassSelector = ClassSelector>(
    s: S
  ): HTMLCollectionOf<E>;
}

function assertIsIdSelector(selector: string): selector is IdSelector {
  return selector[0] === '#';
}
function assertIsClassSelector(selector: string): selector is ClassSelector {
  return selector[0] === '.';
}

const getEl: QueryElementBySelector = function getEl<E extends HTMLElement>(
  selector: IdSelector | ClassSelector
) {
  if (assertIsIdSelector(selector)) {
    return document.getElementById(selector.slice(1)) as E | null;
  }
  if (assertIsClassSelector(selector)) {
    return document.getElementsByClassName(selector.slice(1));
  }
  return null;
};

export { getEl };
