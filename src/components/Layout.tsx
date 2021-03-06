import { Meta, Navbar, Footer } from 'components/index';
import { Box, Heading } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

interface LayoutProps {
  title: string;
  description: string;
  canonical: string;
  schemaData?: string;
  hasNavbar?: boolean;
  hasFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  canonical,
  schemaData = null,
  hasNavbar = true,
  hasFooter = true,
}) => {
  const Loading = dynamic<any>(
    () => import('./Loading').then((mod) => mod.Loading),
    { ssr: false },
  );

  return (
    <>
      <Loading
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        options={{ easing: 'ease', speed: 500 }}
      />
      <Meta
        title={title}
        description={description}
        canonical={canonical}
        schemaData={schemaData}
      />
      {hasNavbar && <Navbar />}

      <Box as="main" width="100vw" minHeight="100vh" bg="gray.100">
        {children}
      </Box>
      {hasFooter && (
        <Box as="footer" bg="gray.100">
          <Footer />
        </Box>
      )}
    </>
  );
};
