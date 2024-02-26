import { CSSProperties, useCallback, useRef } from 'react';

interface Section {
  label: string;
  styles: CSSProperties;
}

const sections: Section[] = [
  {
    label: 'Section 1',
    styles: {
      width: '100%',
      height: '600px',
      backgroundColor: 'red',
    },
  },
  {
    label: 'Section 2',
    styles: {
      width: '100%',
      height: '600px',
      backgroundColor: 'green',
    },
  },
  {
    label: 'Section 3',
    styles: {
      width: '100%',
      height: '600px',
      backgroundColor: 'violet',
    },
  },
  {
    label: 'Section 4',
    styles: {
      width: '100%',
      height: '600px',
      backgroundColor: 'orange',
    },
  },
  {
    label: 'Section 5',
    styles: {
      width: '100%',
      height: '600px',
      backgroundColor: 'salmon',
    },
  },
  {
    label: 'Section 6',
    styles: {
      width: '100%',
      height: '600px',
      backgroundColor: 'black',
      border: '1px solid white',
      color: 'white',
    },
  },
];

const ScrollToSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const pos = ref.current?.getBoundingClientRect().top;

    window.scrollTo({ top: pos, behavior: 'smooth', left: 0 });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      <h1>ScrollToSection1</h1>
      <button onClick={handleScroll}>Scroll to section</button>
      {sections.map(({ label, styles }, index) => (
        <div ref={index === 3 ? ref : null} key={label} style={styles}>
          <h2>{label}</h2>
        </div>
      ))}
    </div>
  );
};
export default ScrollToSection;
1;
