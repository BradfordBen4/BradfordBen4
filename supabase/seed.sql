-- Seed data matching the mock catalog used by the frontend
-- (lib/mock/products.ts and lib/mock/stories.ts) so the database
-- mirrors the site once pages are wired to read from Supabase.

insert into public.products (slug, title, description, price, categories, image_url)
values
  ('alphabet-tracing-pack', 'Alphabet Tracing Pack', '26 letter tracing sheets with Bella cheering you on.', 6, array['Preschool', 'Phonics'], null),
  ('counting-with-bella', 'Counting with Bella', 'A hands-on number sense workbook for ages 4-6.', 8, array['Kindergarten', 'Math'], null),
  ('spring-fine-motor-cards', 'Spring Fine Motor Cards', 'Scissor practice and lacing cards for little hands.', 5, array['Fine Motor', 'Daycare'], null),
  ('grade-2-word-problems', 'Grade 2 Word Problems', 'Story-based math word problems aligned to Grade 2.', 9, array['Grade 2', 'Math'], null),
  ('phonics-blending-bundle', 'Phonics Blending Bundle', 'CVC word blending practice with picture support.', 7, array['Kindergarten', 'Phonics', 'Homeschool'], null),
  ('daycare-morning-circle-cards', 'Daycare Morning Circle Cards', 'Songs, greetings, and routines for circle time.', 6, array['Daycare', 'Preschool'], null),
  ('homeschool-weekly-planner', 'Homeschool Weekly Planner', 'A printable planner to organize your homeschool week.', 10, array['Homeschool'], null),
  ('grade-1-sight-words', 'Grade 1 Sight Words', 'Practice pages for the 100 most common sight words.', 7, array['Grade 1', 'Phonics'], null)
on conflict (slug) do nothing;

insert into public.stories (slug, title, episode_number, body, next_episode_slug)
values
  (
    'bella-and-the-missing-acorns',
    'Bella and the Missing Acorns',
    1,
    e'One crisp morning, Bella hopped up to the Reading Tree and found her friend Sammy Squirrel in a terrible tizzy. "My acorns! My winter acorns are all gone!" he cried.\n\nBella tucked her ears back and thought hard. "Don''t worry, Sammy. Every good story has clues, and every good problem has a solution. Let''s look together!"\n\nThey followed a trail of tiny paw prints past the berry bushes and found the acorns tucked safely in a hollow log, gathered by a family of baby chipmunks getting ready for winter too. Everyone shared the harvest and Bella hopped home with a happy heart.',
    'bella-and-the-rainbow-bridge'
  ),
  (
    'bella-and-the-rainbow-bridge',
    'Bella and the Rainbow Bridge',
    2,
    e'After a summer rainstorm, Bella arrived at Rainbow River to find the little wooden bridge washed away! On the other side, her friends were waiting for story time.\n\n"We need stepping stones," said Bella, "but we''ll need exactly the right number, or someone might get their paws wet!" She counted the gap, one hop at a time: one, two, three, four, five stones.\n\nWith five stones carefully placed, Bella crossed the river without a single splash. "Math helps us build brave new paths," she said with a grin, and everyone hopped across together.',
    'bella-and-the-star-meadow-picnic'
  ),
  (
    'bella-and-the-star-meadow-picnic',
    'Bella and the Star Meadow Picnic',
    3,
    e'It was almost time for the Star Meadow Picnic, and Bella had one job: make sure every friend had a fair share of Sunflower Sandwiches.\n\nShe laid out a blanket and counted her friends, then counted the sandwiches. There were exactly enough, as long as everyone remembered to share the blueberries too!\n\nUnder the twinkling evening stars, Bella and her friends toasted their cups of berry juice. "The best adventures," Bella said, "are always better shared."',
    null
  )
on conflict (slug) do nothing;
