import clsx from 'clsx';

import withTheme from 'utils/hocs/withTheme';

const SELECTED_CLASS_NAME = 'selected';
const DISABLED_CLASS_NAME = 'disabled';
const INVISIBLE_CLASS_NAME = 'invisible';

const NavbarItem = withTheme(({
  theme,
  className,
  disabled,
  selected,
  invisible,
  ...rest
}) => (
  <>
    <li
      className={
        clsx(
          {[SELECTED_CLASS_NAME]: selected},
          {[DISABLED_CLASS_NAME]: disabled},
          {[INVISIBLE_CLASS_NAME]: invisible},
          className
        )
      }
      {...rest} />
    <style jsx>{`
      li {
        flex: 1;
        color: var(--palette-text-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      li > :global(a) {
        font-size: 1rem;
        color: var(--palette-text-primary);
        padding: 12px;
        text-align: center;
        text-decoration: none;
        transition: color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut} 0ms, padding ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut} 0ms;
        border-bottom: 3px solid transparent;
      }

      li.${SELECTED_CLASS_NAME} :global(a) {
        color: var(--palette-primary-main);
        border-bottom-color: var(--palette-primary-main);
      }

      li.${DISABLED_CLASS_NAME} :global(a) {
        color: var(--palette-text-disabled);
        pointer-events: none;
      }

      li.${INVISIBLE_CLASS_NAME} {
        display: none;
      }
    `}</style>
  </>
));

const Navbar = ({
  theme,
  ...rest
}) => (
  <>
    <ul {...rest} />
    <style jsx>{`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid var(--palette-divider);
        background-color: var(--palette-background-paper);
      }

      @media ${theme.mediaQueries.small} {
        ul {
          flex-direction: column;
        }
      }
    `}</style>
  </>
);

export {
  NavbarItem
};

export default withTheme(Navbar);
